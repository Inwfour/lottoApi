using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Security.Authentication;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using lottoApi.Models;
using Microsoft.AspNetCore.Authorization;

namespace lottoApi.Controllers
{

    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    [Route("api/[controller]")]
    public class TicketController : Controller
    {
        IMongoCollection<Ticket> Collection { get; set; }

        public TicketController()
        {
            var settings = MongoClientSettings.FromUrl(new MongoUrl("mongodb://lottov2:Lottosiam321@ds052978.mlab.com:52978/user"));
            settings.SslSettings = new SslSettings()
            {
                EnabledSslProtocols = SslProtocols.Tls12
            };
            var mongoClient = new MongoClient(settings);
            var database = mongoClient.GetDatabase("user");
            Collection = database.GetCollection<Ticket>("tickets");

        }

        [HttpGet("[action]")]
        public IEnumerable<Ticket> List()
        {
            return Collection.Find(x => true).ToList();
        }

        [HttpPost("[action]")]
        public void Create([FromBody]Ticket request)
        {
            request.Id = Guid.NewGuid().ToString();
            Collection.InsertOne(request);
        }

        [HttpPost("[action]/{id}")]
        public void Delete(string id)
        {
            Collection.DeleteOne(x => x.Id == id);
        }

        [HttpPost("[action]")]
        public void Edit([FromBody]Ticket request)
        {
            Collection.ReplaceOne(x => x.Id == request.Id, request);
        }

        [HttpGet("[action]/{id}")]
        public Ticket Get(string id)
        {
            return Collection.Find(x => x.Id == id).FirstOrDefault();
        }


        [HttpGet("[action]/{id}/{game}")]
        public IEnumerable<Ticket> Getticket(string id, string game)
        {

            return Collection.Find(x => x.RefId == id && x.Game == game).SortBy(x => x.No).ToList();
        }

        [HttpGet("[action]/{id}/{game}/{isPlayed}")]
        public IEnumerable<Ticket> Getstatus(string id, string game,bool isPlayed)
        {

            return Collection.Find(x => x.RefId == id && x.Game == game && x.IsPlayed == isPlayed).SortBy(x => x.No).ToList();
        }
    }
}