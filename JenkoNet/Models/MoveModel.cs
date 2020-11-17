using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JenkoNet.Models
{
    public class MoveModel
    {
        public string Name { get; set; }
        public string Type { get; set; }
        public string Text { get; set; }
        public List<string> Items { get; set; }
        public List<string> Items2 { get; set; }
        public string Label { get; set; }
        public string Condition { get; set; }

    }
}