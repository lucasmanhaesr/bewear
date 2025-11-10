"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

    const formSchema = z.object({
        name: z.string().trim().min(1, { message: "Nome é obrigatório" }),
        email: z.email({ message: "E-mail inválido" }),
        password: z.string().min(8, { message: "Senha deve ter pelo menos 8 caracteres" }),
        passwordConfirmation: z.string().min(8, { message: "Senha deve ter pelo menos 8 caracteres" }),
    }).refine((data) => {
        return data.password === data.passwordConfirmation;
    }, {
        message: "As senhas não coincidem",
        path: ["passwordConfirmation"],
    });

    type FormValues = z.infer<typeof formSchema>;

    const SignOutForm = () => {

        const form = useForm<z.infer<typeof formSchema>>({
            resolver: zodResolver(formSchema),
            defaultValues: {
                name: "",
                email: "",
                password: "",
                passwordConfirmation: "",
            },
        });

        function onSubmit(values: FormValues) {
            console.log("FORMULARIO VALIDO E ENVIADO");
            console.log(values);
        }

        return (
            <>
                <Card>
                    <CardHeader>
                    <CardTitle>Criar conta</CardTitle>
                    <CardDescription>Crie uma conta para continuar.</CardDescription>
                    </CardHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <CardContent className="grid gap-6">
                                <FormField 
                                    control={form.control} name="name" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nome</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Insira seu nome" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField 
                                    control={form.control} name="email" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>E-mail</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Insira seu E-mail" {...field} type="email" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField 
                                    control={form.control} name="password" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Senha</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Insira sua senha" {...field} type="password" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control} name="passwordConfirmation" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Confirmar senha</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Digite sua senha novamente" type="password" {...field}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                            <CardFooter>
                                <Button type="submit" className="w-full hover:cursor-pointer">Criar conta</Button>
                            </CardFooter>
                        </form>
                    </Form>
            </Card>
            </>
        );
    };

export default SignOutForm;