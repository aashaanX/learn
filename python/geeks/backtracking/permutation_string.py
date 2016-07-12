# this is a program to permutation of a string.
# used to learn backtracking
# duplicates are allowed

def toString(List):
	return ''.join(List)

def permute(a,l,r):
	# function to print permutation of a string
	# This function takes three inputs
	# a = string
	# l = starting index
	# r = Ending index
	if l==r:
		print(toString(a))
	else:
		for i in range(l,r+1):
			a[l] ,a[i] = a[i],a[l]
			permute(a,l+1,r)
			a[l],a[i] = a[i],a[l]     # backtrack

# driver program to test the above function

string = "ABCD"
n = len(string)
a = list(string)
permute(a,0,n-1)
