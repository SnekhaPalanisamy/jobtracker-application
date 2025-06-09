using Job_Tracker_Application.Data;
using Job_Tracker_Application.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Job_Tracker_Application.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobsController : ControllerBase
    {
     
            private readonly AppDbContext _context;

            public JobsController(AppDbContext context)
            {
                _context = context;
            }

            [HttpGet]
            public async Task<ActionResult<IEnumerable<JobApplication>>> GetJobs()
            {
                return await _context.JobApplications.ToListAsync();
            }

            [HttpGet("{id}")]
            public async Task<ActionResult<JobApplication>> GetJob(int id)
            {
                var job = await _context.JobApplications.FindAsync(id);
                if (job == null) return NotFound();
                return job;
            }

            [HttpPost]
            public async Task<ActionResult<JobApplication>> CreateJob(JobApplication job)
            {
                _context.JobApplications.Add(job);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetJob), new { id = job.Id }, job);
            }

            [HttpPut("{id}")]
            public async Task<IActionResult> UpdateJob(int id, JobApplication updatedJob)
            {
                if (id != updatedJob.Id) return BadRequest();

                _context.Entry(updatedJob).State = EntityState.Modified;
                try { await _context.SaveChangesAsync(); }
                catch (DbUpdateConcurrencyException)
                {
                    if (!_context.JobApplications.Any(j => j.Id == id))
                        return NotFound();
                    throw;
                }

                return NoContent();
            }

            [HttpDelete("{id}")]
            public async Task<IActionResult> DeleteJob(int id)
            {
                var job = await _context.JobApplications.FindAsync(id);
                if (job == null) return NotFound();

                _context.JobApplications.Remove(job);
                await _context.SaveChangesAsync();
                return NoContent();
            }
        
    }
}
