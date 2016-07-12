def bubble(data):
	""" bubble sort is the simplest algorithm which works by repeatedly
		swapping the adjacent 	elements if they are in wrong order
		in actula the complexity of the algorithm is O(n2).
		below given is optimized version of the bubble sort which will stop 
		execution if no swapping take place in the current pass."""
	swapped = True
	for i in range(len(data)):
		swapped = False
		for j in range(0,len(data)-i-1):
			if data[j]>data[j+1]:
				data[j],data[j+1] = data[j+1],data[j]
				swapped = True
		if swapped:
			pass
		else:
			break
	return data


data = [0,5,1,7,3,9,8,2,4,3]
print(bubble(data))
