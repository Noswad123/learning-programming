def isSubsequence(s, t):
  if s == t or s =='':
    return True

  return recurse(s, t)

def recurse(remainingSubsequence, remainingString):
  if len(remainingSubsequence) > len(remainingString):
    return False
 
  if len(remainingSubsequence) == 0:
    return True

  for i in range(len(remainingString)):
    if remainingSubsequence[0] == remainingString[i]:
      return recurse(remainingSubsequence[1:], remainingString[i+1:])
  return False