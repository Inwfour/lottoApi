using System;

namespace lottoApi.Models
{
    public class Ticket
    {
        public string Id { get; set; }
        public string RefId { get; set; }
        public string Game { get; set; }
        public int SerialNumber { get; set; }
        public DateTime Date { get; set; }
        public bool Status { get; set; }
        public string StatusGame { get; set; }
        public int SetNumber { get; set; }
    }
}