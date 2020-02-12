using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SandboxApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TurtleController : ControllerBase
    {
        public JsonResult Get()
        {
            var toRet = new TurtleCommand
            {
                Name = "Avensia Logo",
                Commands = new List<string>
                {
                    "pu",
                    "lt 45",
                    "fd 80",
                    "rt 135",
                    "pd",
                    "fd 40",
                    "rt 60",
                    "fd 60",
                    "rt 60",
                    "fd 60",
                    "rt 60",
                    "fd 40",
                    "rt 120",
                    "fd 60",
                    "lt 60",
                    "fd 60",
                    "pu",
                    "rt 120",
                    "fd 60",
                    "pd",
                    "fd 40",
                    "rt 60",
                    "fd 60",
                    "rt 60",
                    "fd 60",
                    "rt 60",
                    "fd 40",
                    "rt 120",
                    "fd 60",
                    "lt 60",
                    "fd 60",
                    "ht"
                }
            };

            return new JsonResult(toRet);
        }

        public class TurtleCommand
        {
            public string Name { get; set; }
            public List<string> Commands { get; set; }
        }
    }
}