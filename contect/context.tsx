"use client"
import React, { createContext, useContext, useEffect, useState } from "react";
import { Tcontext ,item , Icp} from "@/app/types/types"


///////////////
const Context = createContext({} as Tcontext)
////////////////
export const usecartcontext = () => {
    return (useContext(Context))
}
///////////////


export function Contextprovider({ children }: Icp) {
    const [item, setitem] = useState<item[]>([])
    //////////////////////////////////////////


    const cartallqty = item.reduce((tqty, items) => {
        return tqty + items.qty
    }, 0)
    ////////////////

    const getitemqty = (id: number) => {
        return item.find((item) => item.id == id)?.qty
            || 0
    }
    /////////////
    const increase = (id: number) => {
        setitem(ci => {
            let nothing = ci.find(item => item.id == id) == null
            if (nothing) {
                return [...item, { id: id, qty: 1 }]
            }
            else {
                return ci.map(item => {
                    if (item.id == id) {
                        return {
                            ...item,
                            qty: item.qty + 1
                        }
                    }
                    else {
                        return item
                    }
                })
            }




        })
    }
    ////////////////////////////////
    const remove = (id: number) => {
        setitem(ci => {
            return ci.filter(item => item.id != id)
        })

    }

    /////////////////////////////////////////////////////////////////////////////////
    const decrease = (id: number) => {
        setitem(ci => {
            let something = ci.find(item => item.id === id)?.qty == 1
            if (something) {
                return ci.filter(item => item.id != id)
            }
            else {
                return ci.map(item => {
                    if (item.id == id) {
                        return {
                            ...item,
                            qty: item.qty - 1
                        }

                    }
                    else {
                        return item
                    }
                })

            }



        })

    }

    useEffect(() => {
        let stored =localStorage.getItem("items")
        if(stored){
            setitem(JSON.parse(stored))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(item))
    }, [item])






    return (
        <Context.Provider value={{ item, increase, getitemqty, cartallqty, decrease, remove }}>
            {children}
        </Context.Provider>
    )
}
