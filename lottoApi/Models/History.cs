using System;

namespace lottoApi.Models
{
    public class History
    {
        public string Id { get; set; }
        public int No { get; set; }
        public int Type { get; set; }
        public string Img { get; set; }
        public string RefId { get; set; }
        public string Game { get; set; }
        public string DetailGame { get; set; }
        public int SerialNumber { get; set; }
        public string Date { get; set; }
        public string Time { get; set; }
        public string Amouth { get; set; }

    }
}