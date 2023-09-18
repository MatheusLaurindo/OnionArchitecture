using OnionArchitecture.Core.Domain;

namespace OnionArchitecture.Database.Repositories.Interface
{
    public interface IBookRepository
    {
        Task<List<Book>> GetBooksAsync();
        Task<Book> GetBookByIdAsync(long id);
        Task<Book> GetBookByNameAsync(string name);
        Task<List<Book>> GetBooksByWriterAsync(string writer);
        Task CreateAsync(Book book);
        Task UpdateAsync(Book book);
        Task DeleteAsync(long id);
    }
}
