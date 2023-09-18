using Microsoft.EntityFrameworkCore;
using OnionArchitecture.Core.Domain;

namespace OnionArchitecture.Database
{
    public class AppContext : DbContext
    {
        public DbSet<Book> Books { get; set; }

        public AppContext(DbContextOptions<AppContext> dbContextOptions) : base(dbContextOptions)
        {
        }
    }
}
