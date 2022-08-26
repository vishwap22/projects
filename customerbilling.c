#include <stdio.h>
#include <stdlib.h>

int i = 0, login = 0;
/*
user id => userone
password => useridone
*/
void
userlogin ()
{
  char uid[20];
  char pwd[20];
  char existuid[] = "userone";
  char existpwd[] = "useridone";
  printf ("welcome to customer billing system!\n");
  printf ("enter user id\n");
  scanf ("%s", uid);
  printf ("enter password\n");
  scanf ("%s", pwd);
  for (i = 0; uid[i] == existuid[i] && uid[i] != '\0'; i++);
  if (uid[i] == existuid[i])
    {
      for (i = 0; pwd[i] == existpwd[i] && pwd[i] != '\0'; i++);
      if (pwd[i] == existpwd[i])
	{
	  login = 1;
	}
    }
}

int
main ()
{
  int billtype = 0, postpaid = 0, prepaid = 0;
  float postpaidbill = 0.0, prepaidbill = 0.0;
  userlogin ();
  if (login == 1)
    {
      printf ("selecting your billing type\n");
      printf ("1. postpaid\n2. prepaid\n");
      scanf ("%d", &billtype);
      switch (billtype)
	{
	case 1:
	  postpaid = 1;
	  break;
	case 2:
	  prepaid = 1;
	  break;
	default:
	  printf ("wrong choice!");
	}
      if (postpaid == 1)
	{
	  printf ("enter your bill amount\n");
	  scanf ("%f", &postpaidbill);
	  printf ("\nhere is your invoice\n");
	  printf ("your billing type is postpaid\n");
	  printf ("\n=========================================\n");
	  printf ("your billing amount is %f", postpaidbill);
	  printf ("\nthank you for using our service!");
	}
      if (prepaid == 1)
	{
	  printf ("enter your bill amount\n");
	  scanf ("%f", &prepaidbill);
	  printf ("\n\nhere is your invoice\n");
	  printf ("your billing type is postpaid\n");
	  printf ("\n=========================================\n");
	  printf ("your billing amount is %f", postpaidbill);
	  printf ("\nthank you for using our service!");
	}
    }
}
