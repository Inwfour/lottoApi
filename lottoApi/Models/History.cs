using System;

namespace lottoApi.Models
{
    public class History
    {
        public string Id { get; set; }
        public string Img { get; set; }
        public string RefId { get; set; }
        public string Game { get; set; }
        public string DetailGame { get; set; }
        public int SerialNumber { get; set; }
        public string Date { get; set; }
        public bool Status { get; set; }
        public string StatusGame { get; set; }
        public int Amouth { get; set; }

    }
}