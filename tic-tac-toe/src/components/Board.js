import React, {useState} from 'react';
import Box from "./Box";

function PrintRows({children,size, index,item,i,mark,clickHandler}) {
    return(
        <>
            {children}
        </>
    );
}

function Board({mark,size, grid,clickHandler}) {
    console.log('board render ');
    return (
        <>
            {grid.map(
                function (item,i) {
                    return (<div key={i} className="board-row">
                        {item.map(
                            function (item1,j) {
                                return (
                                    <Box key={((j+1) + (size*i))} mark={mark} index={((j) + (size*i))} clickHandler={clickHandler}/>
                                )
                            }
                        )}
                    </div>)
                }
            )}
        </>
    );
}

export default React.memo(Board);

// return (
//     <>
//         {grid.map(
//             function (item,i) {
//                 return (<div key={i} className="board-row">
//                     {item.map(
//                         function (item1,j) {
//                             return (
//                                 <Box key={((j+1) + (size*i))} mark={mark} index={((j) + (size*i))} clickHandler={clickHandler}/>
//                             )
//                         }
//                     )}
//                 </div>)
//             }
//         )}
//     </>
// );
