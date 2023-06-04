import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Loader } from "react-full-page-loader-overlay";
import alanBtn from '@alan-ai/alan-sdk-web';
const Home = () => {
    const defaultImage = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAI8AhQMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQIDBAUGB//EADAQAAIBAgQEBQIGAwAAAAAAAAABAgMRBBIhMQVBUWETIjJSkXGBBjRiobHhI0Jy/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/AP3EAAAAAAAAAAAAAAAAAAAAAAAAAAACJSSQBuxVz6FHJsgCXJsgAqAu+oAVZTfPUupJmQINwZxnyZoAAAAAAAABDdlcybuWqO7tyKAAAVA5KuOjF2pxzd3oivEKruqS+sjhIrsWPnfWEX8nTQxNOtorqXtZ5RMW07ptPqQe0DPD1PFoqT32f1NDSBeEuTKADcFYO6LEUAAAhuyJK1H5QMgAVAAAeXjfzM79v4MDvx9FySqRV2vUuxwEUALQi5yUYq7fIiu/h1/Bl/0dRnQpqlSjDpuzQ0yAAC1N+Y1MY6SRsRQAAClT0/cuVqLygZAAqABzVsXTpvLHzvsB0nPVwdOo7q8X+k454utLaWVdkZOpOT805P6siu1YBX1qO3ZHRSo06Pojbu92eTd9X8lo1akfTUkvuKPYB5tPG1YvzWku6OyhiIVttJe1ijYAFQW6NzGOskbEUAAAhq6sSAMAXqKzuUKOTH1nBKnF2b1b7Hnm+O/My+xgQAARQAACU2mmnZrmQAPWw1XxaKk99manHw13jNcro7DSL01rc0IirIkgAAAAAIaujKSys2IaT3AwaT3SGVdEWlFr6EARlj0XwMsfavgkFRGWPtXwMsfavgkARlj7V8DLH2r4JAEJJbJL7GlOPNkxh1LkUAAAAAAAAAAAo4J7FwBk4NFbPozcAYWfQnK3yNgBmqfUuopbIkAAAAAAAAAAAAIbSWpJ5vFMFXxsoRp1vDpWtUWZ66p8uem9/wCg9G4uj56rwbidemoV+IOpljaLVScG24yTbt3a+DaPDeJJTb4hOUszcLzdl5k+S2smrfvqB7dwpJq9zwqfCuI0pQUMc/ChJ3g6k/Oul911v3tsXp8M4jS4dRwsMdadJNeNqm9Glovbpps7age1cXPHwvD+IUq8atbHzlFTv4eZuKjp5dd7a6vc2xuAq150bOnUyU5xk67upXWl4pWetgPSuM3Znzr/AA/iI1v8WKj4Ecqp05L0WikpK2zWtuXmbKr8PVZQk5ypxk6bi6UZXp3cr846R/TZpvfqw+kuE7nz0uBYt1dMXGFOU3KahHK5XVnK6W9syS/1vdN2SPX4XhXg8DSw7qeI4LWVrXbd9FyWui5IDrAAAAAf/9k=';
    const Alan = '28ac26bcf00ebb7319da40d3735189e12e956eca572e1d8b807a3e2338fdd0dc/stage'
    const [articles, setArticles] = useState([])

    const [loader, setLoader] = useState(true)
    useEffect(() => {
        setLoader(true)
        getNewsData()
    }, [])

    const getNewsData = async () => {

        const response = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-01-26&sortBy=publishedAt&apiKey=e2e0e56975d342dd8e3197936a27f7e1')
        const demo = response.data.articles
        setArticles(demo);
        setLoader(false)

    }
    useEffect(() => {
        alanBtn({
            key: '28ac26bcf00ebb7319da40d3735189e12e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: (response) => {
                // if (command === 'navigate') {
                //     // setArticles(...articles , )
                //     console.log('articles', articles)
                // }
                console.log('resp',response)
            }
        });
    }, []);
    return (
        <div className="flex flex-auto w-full p-4">
            {
                loader &&  articles &&  articles.length > 0 ?

                    <Loader show={loader} /> :
                    <div className='grid  xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full md:p-4  lg: p-8'>
                        {
                            articles.map((article, index) => {
                                return (

                                    <div key={index} className=" bg-slate-200 h-8/10 border-2 border-white  rounded shadow-2xl ">
                                        <img className="rounded h-52" src={article.urlToImage ? article.urlToImage : defaultImage} alt="" />
                                        <div className="p-5 space-y-4">
                                            <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{article.title ?article.title.slice(0, 20): null}</h1>
                                            <h3 className="text-md font-semibold text-dark ">{article.description.slice(0, 50)}</h3>
                                            <p className="text-sm  leading-6 font-medium text-slate-800 ">{article.content ? article.content.slice(0, 100) : decontent.slice(0, 100)} </p>
                                            <a href={article.url} className=" mt-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Read more

                                            </a>
                                        </div>
                                    </div>
                                )

                            })
                        }
                    </div>

            }
        </div>
    )
}

export default Home