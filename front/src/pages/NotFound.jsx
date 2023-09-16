import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
                  
<section class="bg-white dark:bg-gray-900 ">
    <div class="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div>
            <p class="text-sm font-medium text-blue-500 dark:text-blue-400">404 خطأ</p>
            <h1 class="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">لا يمكن ايجاد الصفحة</h1>
            <p class="mt-4 text-gray-500 dark:text-gray-400">الرسالة هذه تعني ان الصفحة التي تريد الذهاب اليها غير موجودة او ان تم حذفها او يعني تم تغيير عنوان url </p>
            <NavLink to='../'>
            <div class="flex items-center mt-6 gap-x-3">
                <button class="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                    الرجوع للصفحة الرئيسية  
                </button>
            </div>
          </NavLink>
        </div>
        
        <div class="relative w-full mt-12 lg:w-1/2 lg:mt-0">
            <img class="w-full max-w-lg lg:mx-auto" src="/images/components/illustration.svg" alt="" />
        </div>
    </div>
</section>

        
    </div>
  )
}

export default NotFound