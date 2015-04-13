using System;
using System.Collections.Generic;

namespace MVC6WebApi01.Models
{
    public interface ITodoRepository
    {
        IEnumerable<TodoItem> AllItems { get; }
        void Add(TodoItem item);
        TodoItem GetById(int id);
        bool TryDelete(int id);
    }
}