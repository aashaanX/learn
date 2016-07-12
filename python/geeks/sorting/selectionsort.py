def sSort(data):
	""" Function to do Selection Sort
	This sortinf method finds the smallest element unsorted and 
	place it at the beginig at the end of sorted sub array"""
	for i in range(len(data)):
		min_index = data.index(min(data[i:]))
		data[i],data[min_index] = data[min_index],data[i]
	return data

data = [0,2,1,5,4,7,9,6]
print(sSort(data))
