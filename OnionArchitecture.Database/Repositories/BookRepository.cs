using Microsoft.EntityFrameworkCore;
using OnionArchitecture.Core.Domain;
using OnionArchitecture.Database.Repositories.Interface;

namespace OnionArchitecture.Database.Repositories
{
    public class BookRepository : IBookRepository
    {
        private readonly AppContext _context;

        public BookRepository(AppContext context)
        {
            _context = context;
        }

        public async Task CreateAsync(Book book)
        {
            await _context.Books.AddAsync(book);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(Book book)
        {
            _context.Books.Update(book);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(long id)
        {
            Book book = await _context.Books.FirstOrDefaultAsync(x => x.Id == id);

            _context.Books.Remove(book);
            await _context.SaveChangesAsync();
        }

        public async Task<List<Book>> GetBooksAsync()
        {
            return await _context.Books.ToListAsync();
        }

        public async Task<Book> GetBookByIdAsync(long id)
        {
            return await _context.Books.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<Book> GetBookByNameAsync(string name)
        {
            return await _context.Books.FirstOrDefaultAsync(x => x.Name == name);
        }

        public async Task<List<Book>> GetBooksByWriterAsync(string writer)
        {
            return await _context.Books.Where(x => x.Writer == writer).ToListAsync();
        }
    }
}
