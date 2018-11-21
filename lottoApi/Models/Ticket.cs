using System;

namespace lottoApi.Models
{
    public class Ticket
    {
        public string Id { get; set; }
        public string RefId { get; set; }
        public int No { get; set;}
        public int SerialNumber { get; set; }
        public string Game { get; set; }
        public int Collection { get; set; }
        public int Award { get; set; }
        public string TextAward { get; set; }
        public string Date { get; set; }
        public string Time { get; set; }
        public bool IsPlayed { get; set; }
        public int SetNumber { get; set; }
        public int[] Num { get; set; }
    }
}