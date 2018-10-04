using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Security.Authentication;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using myapi.Models;

namespace lottoApi.Controllers
{
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    [Route("api/[controller]")]
    public class TestController : Controller
    {
        IMongoCollection<Test> Collection { get; set; }

        public TestController()
        {
            var settings = MongoClientSettings.FromUrl(new MongoUrl("mongodb://Inwfour:638cb680@ds020208.mlab.com:20208/ionic"));
            settings.SslSettings = new SslSettings()
            {
                EnabledSslProtocols = SslProtocols.Tls12
            };
            var mongoClient = new MongoClient(settings);
            var database = mongoClient.GetDatabase("ionic");
            Collection = database.GetCollection<Test>("test");
        }

        [HttpGet("[action]")]
        public IEnumerable<Test> List()
        {
            return Collection.Find(x => true).ToList();
        }

        [HttpPost("[action]")]
        public void Create([FromBody]Test request)
        {
            request.Id = Guid.NewGuid().ToString();
            Collection.InsertOne(request);
        }

        [HttpPost("[action]/{id}")]
        public void Delete(string id)
        {
            Collection.DeleteOne(x => x.Id == id);
        }
    }
}