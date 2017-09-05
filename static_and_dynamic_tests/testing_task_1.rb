### Testing task 1 code:

# Carry out static testing on the code below.
# Read through the code.
# Comment any errors you can see without correcting them.


def func1 val
  # val should be in brackets
  if val = 1
  # should be ==
  return true
  # should be indented
  else
  return false
  end
end

dif max a b
# keying error - should be def not dif
# a b should be in brackets and seperated by ,
  if a > b
      return a
      # indented too far
  else
  b
  # should be return b and indented
  end
end
end
#there is an extra end

def looper
  #there should be ()
  for i in 1..10
  puts i
  # should be indented
  end
  # should return i
end

failures = 0

if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
#should be an end here


if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  # should be puts "max(100,1) failed"
  failrues = failures + 1
  #spelling error - should be failures
end


if failures
  # should read as failures > 0 otherwise will always fail
  puts "Test Failed"
else
  puts "Test Passed"
end
