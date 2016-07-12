
# this element takes last element as pivot,places
# the pivot element at its correct position in sorted
# array, and places all smaller (smaller then pivot)
# to the left of the pivot and all greater elements to right
# of pivot

def partition(arr,low,high):
	i = low -1 #index of smaller element
	pivot = arr[high] # pivot
	
	for j in range(low,high):
		if arr[j] <=pivot:
			i = i+1
			arr[i],arr[j] = arr[j],arr[i]
	arr[i+1],arr[high] = arr[high],arr[i+1]
	return(i+1)


def quickSort(arr,low,high):
	if (low<high):
		pi = partition(arr,low,high)
		quickSort(arr,low,pi-1)
		quickSort(arr,pi+1,high)



arr = [10,2,5,8,4,6,1]
quickSort(arr,0,len(arr)-1)
print(arr)
