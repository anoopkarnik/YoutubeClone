import React from 'react'
const LEADING_ZERO_FORMATTER = new Intl.NumberFormat(undefined,{minimumIntegerDigits:2});
const formatter = new Intl.RelativeTimeFormat(undefined,{numeric:'always'});

const DIVISIONS: {amount:number; unit: Intl.RelativeTimeFormatUnit}[] = [
    {amount: 60, unit: 'second'},
    {amount: 60, unit: 'minute'},
    {amount: 24, unit: 'hour'},
    {amount: 7, unit: 'day'},
    {amount: 4, unit: 'week'},
    {amount: 12, unit: 'month'},
    {amount: Number.POSITIVE_INFINITY, unit: 'year'}
]

export function formatDuration(duration: number) {
    const hours = Math.floor(duration/3600);
    const minutes = Math.floor((duration-hours*3600)/60);
    const seconds = duration - hours*3600 - minutes*60;
    if (hours>0){
        return `${hours}:${LEADING_ZERO_FORMATTER.format(minutes)}:${LEADING_ZERO_FORMATTER.format(seconds)}`
    }

    return `${minutes}:${LEADING_ZERO_FORMATTER.format(seconds)}`
}

export function formatTimeAgo(date: Date) {
    let duration = (date.getTime() - Date.now())/1000;

    for(let i =0; i<DIVISIONS.length;i++){
        const division = DIVISIONS[i];
        if (Math.abs(duration) < division.amount){
            return formatter.format(Math.round(duration),division.unit);
        }
        duration /= division.amount;
    }
}