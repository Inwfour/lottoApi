using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Security.Authentication;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using lottoApi.Models;

namespace lottoApi.Controllers
{
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    [Route("api/[controller]")]
    public class HistoryController : Controller
    {
        IMongoCollection<History> Collection { get; set; }

        public HistoryController()
        {
            var settings = MongoClientSettings.FromUrl(new MongoUrl("mongodb://lottov2:Lottosiam321@ds052978.mlab.com:52978/user"));
            settings.SslSettings = new SslSettings()
            {
                EnabledSslProtocols = SslProtocols.Tls12
            };
            var mongoClient = new MongoClient(settings);
            var database = mongoClient.GetDatabase("user");
            Collection = database.GetCollection<History>("historys");
        }

        [HttpGet("[action]")]
        public IEnumerable<History> List()
        {
            return Collection.Find(x => true).ToList();
        }

        [HttpPost("[action]")]
        public void Create([FromBody]History request)
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
        public void Edit([FromBody]History request)
        {
            Collection.ReplaceOne(x => x.Id == request.Id, request);
        }

        [HttpGet("[action]/{id}")]
        public History Get(string id)
        {
            return Collection.Find(x => x.Id == id).FirstOrDefault();
        }

        [HttpGet("[action]/{id}")]
        public IEnumerable<History> GetHistory(string id)
        {

            return Collection.Find(x => x.RefId == id).SortBy(x => x.Date).SortBy(x => x.Time).ToList();
        }
    }
}