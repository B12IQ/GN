namespace API.Models.DTO
{
    public class AddFormtRequest
    {
        public string Name { get; set; }
        public int Mobile { get; set; }
        public string Email { get; set; }

        public string Country { get; set; }
        public string City { get; set; }
        public DateTime BirthDate { get; set; }
        public DateTime ContractStartDate { get; set; }
        public DateTime ContractEndDate { get; set; }
        public bool Status { get; set; }
        public string urlHandel { get; set; }
    }
}
