using Job_Tracker_Application.Models;
using Microsoft.EntityFrameworkCore;

namespace Job_Tracker_Application.Data
{
    public class AppDbContext :DbContext

    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
           : base(options)
        {
        }

        public DbSet<JobApplication> JobApplications { get; set; }
    }
}
