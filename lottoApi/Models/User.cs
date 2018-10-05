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
        public Ticket Ticket { get; set; }
    }
    public class Ticket {
            public DateTime DateStart { get; set; }
            public DateTime DateUse { get; set; }
            public int Serial {get; set; }

            public int setNumber { get; set; }

            public int statusTicket { get; set; }
    }
}