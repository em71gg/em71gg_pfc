<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Exception;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array<string, string>  $input
     */
    public function create(array $input): User
    {
        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'surname' => ['required', 'string', 'max:255'],
            'nickname' => ['nullable', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class),
            ],
            'password' => $this->passwordRules(),
            'role' => ['required', 'string', Rule::exists('roles', 'name')]
        ])->validate();

        $user= User::create([
            'name' => $input['name'],
            'surname' => $input['surname'],
            'nickname' => $input['nickname'] ?? null,
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
        ]);

        Log::debug('Usuario creado, disparando evento Registered para: ' . $user->email);
         event(new Registered($user));

        
        $user->assignRole($input['role']);
        return $user;

    }
}
