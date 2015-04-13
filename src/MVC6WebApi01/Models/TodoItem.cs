using System;
using System.ComponentModel.DataAnnotations;

namespace MVC6WebApi01.Models
{
    public class TodoItem
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        public bool IsDone { get; set; }
    }
}