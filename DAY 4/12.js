for(i=0;i<100;i++)
{
   

    if(i%3==0 && i%5==0)
    {
        console.log(i,"fizzbuzz");
        
    }

     if (i % 3 ==0)
    {
        console.log(i,"fizz");
        continue;
    }

    if(i%5 ==0)
    {
        console.log(i,"buzz");
        continue;
    }
}