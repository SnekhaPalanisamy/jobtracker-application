namespace Job_Tracker_Application.Models
{
    public class JobApplication
    {
         
        public int Id { get; set; }
        public string CompanyName { get; set; } = string.Empty;
        public string Position { get; set; } = string.Empty;
        public string Status { get; set; } = "Applied"; // Applied, Interview, Offer, Rejected
        public DateTime AppliedDate { get; set; } = DateTime.UtcNow;
    
    }
}
