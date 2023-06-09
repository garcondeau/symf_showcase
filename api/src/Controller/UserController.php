<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
//    #[Route('/user', name: 'app_user')]
//    public function index(): Response
//    {
//        return $this->render('user/index.html.twig', [
//            'controller_name' => 'UserController',
//        ]);
//    }
    #[Route('/users', name: 'users_callback')]
    public function securedAction(): JsonResponse
    {
        $data = [
            [
                'id' => '0',
                'role' => 'admin',
                'name' => 'admin',
            ],
            [
                'id' => '1',
                'role' => 'user',
                'name' => 'John Doe',
            ]
        ];
        return new JsonResponse($data);
    }
}
