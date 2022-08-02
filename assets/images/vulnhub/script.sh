#!/bin/bash

i=0
while [ $i -lt 108 ]
do
    mv $i-min.png $i.png
        ((i++))
done
