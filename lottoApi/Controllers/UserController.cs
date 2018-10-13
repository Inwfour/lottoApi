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
    [Route("api/[controller]/[action]")]
    public class UserController : Controller
    {
        IMongoCollection<User> Collection { get; set; }
        IMongoCollection<Ticket> Collection1 { get; set; }

        public UserController()
        {
            var settings = MongoClientSettings.FromUrl(new MongoUrl("mongodb://lottov2:Lottosiam321@ds052978.mlab.com:52978/user"));
            settings.SslSettings = new SslSettings()
            {
                EnabledSslProtocols = SslProtocols.Tls12
            };
            var mongoClient = new MongoClient(settings);
            var database = mongoClient.GetDatabase("user");
            Collection = database.GetCollection<User>("userlist");
            Collection1 = database.GetCollection<Ticket>("tickets");
        }

        [HttpGet("")]
        public IEnumerable<User> List()
        {
            return Collection.Find(x => true).ToList();
        }

        [HttpPost("")]
        public void Create([FromBody]User request)
        {
            request.Id = Guid.NewGuid().ToString();
            Collection.InsertOne(request);
        }

        [HttpPost("{id}")]
        public void Addticket([FromBody]User request)
        {
            request.Id = Guid.NewGuid().ToString();
            Collection.InsertOne(request);
        }

        [HttpPost("{id}")]
        public void Delete(string id)
        {
            Collection.DeleteOne(x => x.Id == id);
        }

        [HttpPost("")]
        public void Edit([FromBody]User request)
        {
            Collection.ReplaceOne(x => x.Id == request.Id, request);
        }

        [HttpGet("{name}/{password}")]
        public User Get(string name, string password)
        {
            return Collection.Find(x => x.Name == name && x.Password == password).FirstOrDefault();
        }

        [HttpGet("{id}")]
        public User Getdoc(string id)
        {
            return Collection.Find(x => x.Id == id).FirstOrDefault();
        }
    }
}