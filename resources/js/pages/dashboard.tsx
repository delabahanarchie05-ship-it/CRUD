import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
//import { Label } from '@/components/ui/label';
import { dashboard } from '@/routes';
import { useForm } from '@inertiajs/react';


export default function Dashboard() {
    const form = useForm({
        name: '',
        description: '',
        price: '',
        stock: '',
    });
    function submit (event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        form.post('/products', {
            onSuccess: () => {
                form.reset();
            },
        });
    }
    return (
        <>
            <Head title="Archie" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
            <div>
                <h1 className="text-xl font-semibold"> Product</h1>
                <p className="text-sm text-muted-foreground">
                    Add a new product
                </p>
                </div>
                <form onSubmit={submit} className="max-w-xl space-y-4 rounded-xl border p-4">
                    <div className="space-y-2">
                        <label htmlFor="name">Name</label>
                        <Input id="name" value={form.data.name} 
                        onChange={(event) => form.setData('name', event.target.value)} />
                        {form.errors.name && <p className="text-sm text-red-600 :text-red-400">{form.errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="description">Description</label>
                        <Input id="description" value={form.data.description}
                        onChange={(event) => form.setData('description', event.target.value)} />
                        {form.errors.description && <p className="text-sm text-red-600 dark:text-red-400">{form.errors.description}</p>}
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="price">Price</label>
                        <Input id="price" value={form.data.price}
                        onChange={(event) => form.setData('price', event.target.value)} />
                        {form.errors.price && <p className="text-sm text-red-600 dark:text-red-400">{form.errors.price}</p>}
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="stock">Stock</label>
                        <Input id="stock" value={form.data.stock}
                        onChange={(event) => form.setData('stock', event.target.value)} />
                        {form.errors.stock && <p className="text-sm text-red-600 dark:text-red-400">{form.errors.stock}</p>}
                    </div>
                    <Button type="submit">Save Product</Button>
                </form>                   
                 {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>  */}
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};
