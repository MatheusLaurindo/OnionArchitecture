using OnionArchitecture.Core.Domain.Base;

namespace OnionArchitecture.Core.Domain
{
    public class Book : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Writer { get; set; }

        public Book() : base()
        {
        }
    }
}
