using API.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class userFormContext : DbContext
    {
        public userFormContext(DbContextOptions options) : base(options)
        {
        }
       //DBSet
       //UserForm will be the DB table when we run the migrations 
       public DbSet<UserForm> userForm { get; set; }
    }
}
