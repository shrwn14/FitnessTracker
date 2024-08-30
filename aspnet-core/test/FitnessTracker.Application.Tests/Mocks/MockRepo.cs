using NSubstitute;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Repositories;

namespace FitnessTracker.Mocks
{
    internal class MockRepo<TEntity, TKey> where TEntity : Entity<TKey>
    {
        /// <summary>
        /// This will setup substitute Get methods on the provided repo to return the items from the provided IEnumerable 
        /// </summary>
        /// <param name="repo">The repo to substitute get methods</param>
        /// <param name="items">Collection of items to use as the repo source</param>
        /// <exception cref="EntityNotFoundException"></exception>
        internal static void Substitute(IRepository<TEntity, TKey> repo, IEnumerable<TEntity> items)
        {
            repo
                .GetListAsync(Arg.Any<Expression<Func<TEntity, bool>>>(), Arg.Any<bool>())
                .Returns(x =>
                {
                    var func = x.Arg<Expression<Func<TEntity, bool>>>().Compile();
                    return items.Where(func).ToList();
                });

            repo.GetAsync(Arg.Any<TKey>()).Returns(x =>
            {
                var result = items.FirstOrDefault(s => s.Id.Equals(x.Arg<TKey>()));
                if (result == null)
                    throw new EntityNotFoundException(typeof(TEntity), x.Arg<TKey>());

                return result;
            });

            repo.GetAsync(Arg.Any<Expression<Func<TEntity, bool>>>()).Returns(x =>
            {
                var func = x.Arg<Expression<Func<TEntity, bool>>>().Compile();
                var result = items.FirstOrDefault(func);

                if (result == null)
                    throw new EntityNotFoundException(typeof(TEntity), x.Arg<TKey>());

                return result;
            });
        }
    }
}
