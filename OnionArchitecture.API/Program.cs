using Microsoft.EntityFrameworkCore;
using OnionArchitecture.Database.Repositories;
using OnionArchitecture.Database.Repositories.Interface;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IBookRepository, BookRepository>();
builder.Services.AddDbContext<OnionArchitecture.Database.AppContext>
    (options => options.UseSqlServer("Server=.\\SQLEXPRESS;Database=BooksDb;Trusted_Connection=True;"));

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(options =>
{
    options.WithOrigins("http://localhost:3000");
    options.AllowAnyMethod();
    options.AllowAnyHeader();
});

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseRouting();

app.Run();
