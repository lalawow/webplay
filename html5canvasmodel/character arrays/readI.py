character = "i"
rows = 10
columns = 16
filename = "i.txt"
output_filename = "iarray.txt"

my_file = open(filename, "r")
my_output = open(output_filename, "w")
n = 0
x = []
y = []
for i in range(rows):
	line = my_file.readline()
	for j in range(columns):
		if (line[j] != "0"):
			n = n + 1
			x.append(j)
			y.append(i)

my_output.write(str(n)+"\n")
for i in range(n):
	my_output.write(str(y[i])+"\n")
	my_output.write(str(x[i])+"\n")

my_file.close()
my_output.close()


