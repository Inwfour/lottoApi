using System;

namespace lottoApi.Models
{
    public class User
    {

        public string Id { get; set; }
        public string Img { get; set; }
        
        public string Name { get; set; }
        public string Password { get; set; }
        public int Eth { get; set; }
        public int Money { get; set; }
        public int Coin { get; set; }
    }
}