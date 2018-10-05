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
    public class UserController : Controller
    {
        IMongoCollection<User> Collection { get; set; }

        public UserController()
        {
            var settings = MongoClientSettings.FromUrl(new MongoUrl("mongodb://lottoDB:lottosiam321@ds048537.mlab.com:48537/lottodb"));
            settings.SslSettings = new SslSettings()
            {
                EnabledSslProtocols = SslProtocols.Tls12
            };
            var mongoClient = new MongoClient(settings);
            var database = mongoClient.GetDatabase("lottodb");
            Collection = database.GetCollection<User>("user");
        }

        [HttpGet("[action]")]
        public IEnumerable<User> List()
        {
            return Collection.Find(x => true).ToList();
        }

        [HttpPost("[action]")]
        public void Create([FromBody]User request)
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
        public void Edit([FromBody]User request)
        {
            Collection.ReplaceOne(x => x.Id == request.Id, request);
        }

        [HttpGet("[action]/{id}")]
        public User Get(string id)
        {
            return Collection.Find(x => x.Id == id).FirstOrDefault();
        }
    }
}