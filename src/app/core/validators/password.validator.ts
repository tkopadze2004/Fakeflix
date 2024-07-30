import { FormGroup } from "@angular/forms";

export const passwordMatchValidator = (formGroup: FormGroup): { [key: string]: boolean } | null => {
  const password = formGroup.get('password')?.value;
  const confirmPassword = formGroup.get('confirmPassword')?.value;
  if (password !== confirmPassword) {
    formGroup.get('confirmPassword')?.setErrors({ notMatch: true });
    return { notMatch: true };
  } else {
    formGroup.get('confirmPassword')?.setErrors(null);
    return null;
  }

};
