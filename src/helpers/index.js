

export const refineArray = (array) => {
  const result =  array.map((data) => {
        if (data.completed_at !== null){
            return {
                ...data,
                completed: true,
            }
        } else {
            return {
                ...data,
                completed: false,
            }
        }

    })

    return result;
}

export const sortArray = (array) => {
  const result =  array.sort(function(x, y) {
        // true values first
         return (x.completed - y.completed);
    });

    return result;
}