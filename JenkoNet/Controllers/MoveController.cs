using JenkoNet.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using Newtonsoft.Json;

namespace JenkoNet.Controllers
{
    public class MoveController : ApiController
    {
        private static List<MoveModel> moveList = null; 

        private static List<MoveModel> GetMoves()
        {
            List<MoveModel> moves = new List<MoveModel>();
            //string root = Environment.CurrentDirectory;
            string root = @"C:\Code\C#\JenkoNet\JenkoNet";
            string moveFile = "MasksData";
            using (StreamReader file = File.OpenText(Path.Combine(root, @"Data\", moveFile)))
            {
                JsonSerializer serializer = new JsonSerializer();
                List<MoveModel> list = (List<MoveModel>)serializer.Deserialize(file, typeof(List<MoveModel>));
                if(list.Count > 0) { moves = list; }
            }
            return moves;
        }

        // GET api/Me
        public List<MoveModel> Get()
        {
            if (moveList == null)
            {
                moveList = GetMoves();
            }
            return moveList;
        }


    }
}