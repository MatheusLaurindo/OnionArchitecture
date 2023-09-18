using System.ComponentModel.DataAnnotations;

namespace OnionArchitecture.Core.Domain.Base
{
    public class BaseEntity
    {
        [Key]
        public long Id { get; set; }
        public DateTime InsertDate { get; set; }

        public BaseEntity()
        {
            InsertDate = DateTime.Now;
        }

    }
}
