import React from 'react';
import './Filter.css'
const Filter = () => {
    return (
        <div className="filter-item">
            <span className='text-3xl rounded-2xl border-2 px-1 border-emerald-900'>Filter by:</span>
            <div class="max-w-lg mx-auto p-8 inline-block">
            <details class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg" open>
                <summary class="text-2xl leading-6 text-slate-900 dark:text-white font-semibold select-none">
                Kitchen
                </summary>
                <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    <div><a href="#" className=' text-2xl  text-blue-600 hover:text-blue-800 visited:text-purple-600"'>Italian</a></div>
                    <div><a href="#" className=' text-2xl  text-blue-600 hover:text-blue-800 visited:text-purple-600"'>Kazakh</a></div>
                </div>
            </details>
            </div>

            <div class="max-w-lg mx-auto p-8 inline-block">
            <details class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg" open>
                <summary class="text-2xl leading-6 text-slate-900 dark:text-white font-semibold select-none">
                    Popularity
                </summary>
                <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    <div className=' text-2xl  text-blue-600 hover:text-blue-800 visited:text-purple-600'>High Rating</div>
                    <div className=' text-2xl  text-blue-600 hover:text-blue-800 visited:text-purple-600' >Nearest</div>
                    <div className=' text-2xl  text-blue-600 hover:text-blue-800 visited:text-purple-600'>Newly Opened</div>
                </div>
            </details>
            </div>
            
        </div>
    );
};

export default Filter;