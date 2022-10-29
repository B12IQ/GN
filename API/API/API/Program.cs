using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

 builder.Services.AddDbContext<userFormContext>(options =>options.UseSqlServer(builder.Configuration.GetConnectionString("GNContext")));

//alow every request and making our api public
 builder.Services.AddCors(options => options.AddPolicy("defult", policy => {
    policy.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod();
    }));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{ 
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

//use the injected cors in the pipeline
app.UseCors("defult");

app.UseAuthorization();

app.MapControllers();

app.Run();
