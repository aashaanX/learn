def binarySearch(data,startIndex,endIndex,value):
	if data[(startIndex+endIndex)//2]==value :
		return (startIndex+endIndex)//2
	elif data[(startIndex+endIndex)//2] < value :
		return binarySearch(data,0,((startIndex+endIndex)//2)-1,value)
	else: 
		return binarySearch(data,((startIndex+endIndex)//2)+1,endIndex,value)

data = [0,2,3,5,12,13,16]
print(binarySearch(data,0,6,5))
