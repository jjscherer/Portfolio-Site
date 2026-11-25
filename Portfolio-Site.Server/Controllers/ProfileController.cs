using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Portfolio_Site.Server.Controllers
{
    [ApiController]
    [Route("api/profile")]
    public class ProfileController : ControllerBase
    {
        private string name = "John Joseph Scherer";
        private string bio = "Software Engineer and Game Sound Designer";

        [HttpGet(Name = "GetProfile")]
        public Profile Get()
        {
            return new Profile
            {
                Name = name,
                Bio = bio
            };
        }
    }
}
