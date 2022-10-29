using API.Data;
using API.Models.DTO;
using API.Models.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics.Metrics;
using System.Reflection;
using System.Xml.Linq;

namespace API.Controllers
{
    //tell us this is a Controller for the api
    [ApiController]
    //end point
    [Route("api/[controller]")]
    public class UserFormController : Controller
    {
        private readonly userFormContext dbContext;

        public UserFormController(userFormContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllForms()
        {
            //Get the forms from the DB
            var forms=await dbContext.userForm.ToListAsync();

            return Ok(forms);
        }
        [HttpGet]
        [Route("{id:guid}")]
        [ActionName("GetFormByID")]
        public async Task<IActionResult> GetFormByID(Guid id)
        {
           var form= await dbContext.userForm.FirstOrDefaultAsync(x=>x.Id== id);
            if (form != null)
            {
                return Ok(form);
            }
            return NotFound();
        }

        [HttpPost]

        public async Task<IActionResult>addForm(AddFormtRequest addFormRequest)

        {
            //convert DTO to Entity
            //add the new form inn the DB

            var form = new UserForm()
            {
                Name = addFormRequest.Name,
                Mobile = addFormRequest.Mobile,
                Email = addFormRequest.Email,
                Country = addFormRequest.Country,
                City = addFormRequest.City,
                BirthDate = addFormRequest.BirthDate,
                ContractStartDate = addFormRequest.ContractStartDate,
                ContractEndDate = addFormRequest.ContractEndDate,
                Status = addFormRequest.Status,
                urlHandel = addFormRequest.urlHandel,
            };
            //asign new ID for it
            form.Id=Guid.NewGuid();
            await dbContext.userForm.AddAsync(form);
            await dbContext.SaveChangesAsync();
            //return the location of this form
            return CreatedAtAction(nameof(GetFormByID), new { id = form.Id }, form);
        }

        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> UpdateForm([FromRoute]Guid id, UpdateFormRequest updateFormRequest)
        {
  
             
            // We want to check if this form exist
            var exisitingForm= await dbContext.userForm.FindAsync(id);

            if (exisitingForm != null)
            {
                exisitingForm.Name = updateFormRequest.Name;
                exisitingForm.Mobile = updateFormRequest.Mobile;
                exisitingForm.Email = updateFormRequest.Email;
                exisitingForm.Country = updateFormRequest.Country;
                exisitingForm.City = updateFormRequest.City;
                exisitingForm.BirthDate = updateFormRequest.BirthDate;
                exisitingForm.ContractStartDate = updateFormRequest.ContractStartDate;
                exisitingForm.ContractEndDate = updateFormRequest.ContractEndDate;
                exisitingForm.Status = updateFormRequest.Status;
                exisitingForm.urlHandel = updateFormRequest.urlHandel;

                await dbContext.SaveChangesAsync();
                return Ok(exisitingForm);
            }
            return NotFound();

        }

        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteForm( Guid id)
        {
          var exisitingForm = dbContext.userForm.FindAsync(id);
            if (exisitingForm != null)
            {
                dbContext.Remove(exisitingForm);
                await dbContext.SaveChangesAsync();
                return Ok(exisitingForm);
            }

            return NotFound();
        }
        
    }


}
