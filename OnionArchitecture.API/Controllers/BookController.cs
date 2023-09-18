using Microsoft.AspNetCore.Mvc;
using OnionArchitecture.Core.Domain;
using OnionArchitecture.Core.Dto.RequestDto;
using OnionArchitecture.Core.Dto.ResponseDto;
using OnionArchitecture.Database.Repositories.Interface;

namespace OnionArchitecture.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IBookRepository _repository;

        public BookController(IBookRepository repository)
        {
            _repository = repository;
        }

        [HttpGet("GetAllBooks")]
        public async Task<IEnumerable<BookResponseListDto>> GetAllBooks()
        {
            List<Book> books = await _repository.GetBooksAsync();

            var response = books.Select(x => new BookResponseListDto
            {
                Id = x.Id,
                Name = x.Name,
                Description = x.Description,
                Writer = x.Writer,
                InsertDate = x.InsertDate.ToString()
            });

            return response;
        }

        [HttpGet("GetBookById")]
        public async Task<BookResponseDto> GetBookById(long id)
        {
            Book book = await _repository.GetBookByIdAsync(id);

            var response = new BookResponseDto
            {
                Name = book.Name,
                Description = book.Description,
                Writer = book.Writer
            };

            return response;
        }

        [HttpGet("GetBookByName")]
        public async Task<BookResponseDto> GetBookByName(string name)
        {
            Book book = await _repository.GetBookByNameAsync(name);

            var response = new BookResponseDto
            {
                Name = book.Name,
                Description = book.Description,
                Writer = book.Writer
            };

            return response;
        }

        [HttpGet("GetBooksByWriter")]
        public async Task<IEnumerable<BookResponseListDto>> GetBooksByWriter(string writer)
        {
            List<Book> books = await _repository.GetBooksByWriterAsync(writer);

            var response = books.Select(x => new BookResponseListDto
            {
                Id = x.Id,
                Name = x.Name,
                Description = x.Description,
                Writer = x.Writer,
                InsertDate = x.InsertDate.ToString()
            });

            return response;
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] BookRequestDto dto)
        {
            if (dto is not null)
            {
                Book book = new Book
                {
                    Name = dto.BookName,
                    Description = dto.BookDescription,
                    Writer = dto.BookWriter
                };

                await _repository.CreateAsync(book);
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut("Edit")]
        public async Task<IActionResult> Edit(long id, [FromBody] BookRequestDto dto)
        {
            if (id > 0 && dto is not null)
            {
                Book book = await _repository.GetBookByIdAsync(id);
                book.Name = dto.BookName;
                book.Description = dto.BookDescription;
                book.Writer = dto.BookWriter;

                await _repository.UpdateAsync(book);
                return Ok();
            }

            return NotFound();
        }

        [HttpDelete("Delete")]
        public async Task<IActionResult> Delete(long id)
        {
            if (id > 0)
            {
                await _repository.DeleteAsync(id);
                return Ok();
            }

            return NotFound();
        }
    }
}
